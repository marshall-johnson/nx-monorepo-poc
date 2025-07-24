import { Switch } from '../ui/switch';
import { cn } from '../utils';

type Props = {
  readonly checked: boolean;
  readonly onCheckedChange: (checked: boolean) => void;
};

export function CustomLabeledSwitch({ checked, onCheckedChange }: Props) {
  return (
    <label className="relative inline-flex items-center cursor-pointer w-11 h-6 shadow-xs rounded-full">
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="peer sr-only"
        id="switch"
      />
      {/* Track */}
      <div
        className={cn(
          'w-full h-full bg-white rounded-full shadow-inner flex items-center px-[3px] transition-colors',
          checked ? 'bg-primary' : 'bg-input'
        )}
      >
        {/* Thumb */}
        <div
          className={cn(
            'h-5 w-5 rounded-full transition-transform duration-300 grid place-items-center',
            checked ? 'translate-x-5 bg-white' : 'translate-x-0 bg-[#9D9FA1]'
          )}
        >
          <div
            className={cn(
              'size-2 rounded-full transition-all duration-300',
              checked ? 'bg-primary' : 'bg-input'
            )}
          />
        </div>
        {/* Label inside */}
        <span
          className={cn(
            'absolute right-1.5 text-[7px] font-semibold transition-transform duration-300',
            checked
              ? 'text-primary-foreground dark:text-[#0D3C40] blue:text-[#0D3C40] -translate-x-5'
              : 'text-foreground translate-x-0'
          )}
        >
          {checked ? 'On' : 'Off'}
        </span>
      </div>
    </label>
  );
}
