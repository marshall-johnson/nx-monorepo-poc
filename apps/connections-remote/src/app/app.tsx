// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Button } from '@shared/ui';

export function App() {
  return (
    <div>
      <div className="bg-red-50">
        <Button variant="outline">Button from remote-app</Button>
      </div>
      <NxWelcome title="connections_remote" />
    </div>
  );
}

export default App;
