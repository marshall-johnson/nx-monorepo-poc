import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  Separator,
  ScrollArea,
} from '@shared/ui';
import { AppSidebar } from '../components/layouts/app-sidebar';

export default function MainLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="pr-2">
        <div className="flex items-center justify-between rounded-t-xl border-b border-slate-500 dark:border-border bg-background px-4 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="bg-slate-500 dark:bg-border h-auto self-stretch"
            />
            <span className="text-sm font-medium text-foreground">
              Dashboard
            </span>
          </div>
        </div>
        <div className="p-4">
          <ScrollArea>{children}</ScrollArea>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
