import { useMemo } from 'react';
import { cn } from '../utils';
import { get, has } from 'lodash';
import { Input } from '../ui/input';

function InputText({
  label,
  register,
  errors,
  name,
  rules,
  hint,
  className,
  wrapClassName,
  labelClassName,
  inputRef,
  ...props
}: React.ComponentProps<'input'> & {
  label?: string;
  hint?: string;
  wrapClassName?: string;
  labelClassName?: string;
  register?: any;
  errors?: any;
  rules?: any;
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  const errorMessage = useMemo(() => {
    const err = get(errors, name ?? '');
    if (err) {
      if (Array.isArray(err)) {
        return err
          .filter(({ message }) => message)
          .map(({ message }) => message)
          .join(', ');
      }
      return err.message;
    }
    return '';
  }, [errors, name]);
  return (
    <div
      className={cn(
        'input-group relative flex flex-col gap-1.5',
        wrapClassName
      )}
    >
      {label && label?.length > 0 && (
        <label
          className={cn(
            'input-label text-primary-foreground w-full font-medium tracking-[1.26px] text-[9px] leading-none uppercase',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      {hint && hint?.length > 0 && <span>{hint}</span>}
      <Input
        ref={inputRef}
        autoComplete="new-password"
        spellCheck="false"
        autoCorrect="off"
        name={name}
        {...register?.(name, rules)}
        {...props}
        className={cn(
          'w-full',
          className,
          has(errors, name ?? '') ? 'input-error' : ''
        )}
      />
      {has(errors, name ?? '') && (
        <p className="text-sm pt-1 text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}

export { InputText };
