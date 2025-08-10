import { LucideMessageSquareWarning } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGAElement>, 'svg'>;
  button?: React.ReactElement<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {/* {icon} */}
      {/* To override the props or extend the props when we use the cloneElement function  */}
      {cloneElement(icon, { className: 'w-16 h-16' })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, { className: 'h-10' })}
    </div>
  );
};

export { Placeholder };
