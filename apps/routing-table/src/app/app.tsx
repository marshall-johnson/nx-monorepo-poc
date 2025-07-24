import { Fragment } from 'react';
import { CollapsibleIcon } from '@shared/ui/icons';
import { colServers, rowServers, connections } from './mock-data';

export function App() {
  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="absolute inset-0 pr-2.5 pb-2.5 overflow-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent">
        <div
          className="min-w-max min-h-max grid"
          style={{
            gridTemplateColumns: `80px repeat(${colServers.length}, 80px)`,
            minWidth: 'max-content',
            minHeight: 'max-content',
          }}
        >
          <div className="sticky top-0 left-0 z-[100] bg-transparent"></div>

          {colServers.map((system) => (
            <div
              key={system.id}
              className="sticky backdrop-blur-sm top-0 z-[100] flex items-center justify-center flex-col text-center text-xs text-[8px] pb-2.5 leading-3.5 text-foreground font-medium"
            >
              <CollapsibleIcon className="size-2 text-[#E7E6F5] dark:text-white/20 blue:text-white/20 rotate-180" />
              <span>{system.label}</span>
              <div className="font-light uppercase">{system.status}</div>
            </div>
          ))}

          {rowServers.map((rowSystem) => (
            <Fragment key={rowSystem.id}>
              <div className="sticky left-0 backdrop-blur-sm z-[100] flex gap-1.5 items-center text-[8px] leading-3.5 text-foreground font-medium">
                <CollapsibleIcon className="size-2 text-[#E7E6F5] dark:text-white/20 blue:text-white/20 -rotate-90" />
                <div className="flex flex-col">
                  {rowSystem.label}
                  <div className="text-[10px] text-gray-400 uppercase">
                    {rowSystem.status}
                  </div>
                </div>
              </div>

              {colServers.map((colSystem) => {
                const isActive = connections.some(
                  (c) =>
                    c.from === rowSystem.id && c.to === colSystem.id && c.active
                );

                return (
                  <div
                    key={colSystem.id}
                    className="flex justify-center items-center h-20 relative"
                  >
                    <div className="w-full h-px absolute top-1/2 left-0 bg-accent z-0" />
                    <div
                      className={`w-4 relative h-4 rounded-full ${
                        isActive ? 'bg-green-400 shadow-lg' : 'bg-gray-300'
                      } hover:scale-110 transition-transform`}
                      title={`${rowSystem.label} → ${colSystem.label}`}
                    />
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
