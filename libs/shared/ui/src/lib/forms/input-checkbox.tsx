import { useMemo } from 'react';
import { cn } from '../utils';
import { get, has } from 'lodash';
import { Checkbox } from '../ui/checkbox';

function InputCheckbox({
  label,
  register,
  errors,
  name,
  rules,
  className,
  wrapClassName,
  labelClassName,
  inputRef,
  ...props
}: React.ComponentProps<'input'> & {
  label?: string;
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
      <div className="flex items-center gap-2">
        <Checkbox
          id={`checkbox-${name}`}
          ref={inputRef}
          name={name}
          {...register?.(name, rules)}
          {...props}
          className={cn(
            className,
            has(errors, name ?? '') ? 'input-error' : ''
          )}
        />
        {label && label?.length > 0 && (
          <label
            htmlFor={`checkbox-${name}`}
            className={cn(
              'text-primary-foreground text-[13px] leading-3.5',
              labelClassName
            )}
          >
            {label}
          </label>
        )}
      </div>
      {has(errors, name ?? '') && (
        <p className="text-sm pt-1 text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}

export { InputCheckbox };
