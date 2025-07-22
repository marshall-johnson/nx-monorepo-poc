import {
  Home,
  User,
  User2,
  ChevronUp,
  LocateFixed,
  Settings2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  SidebarHeader,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@shared/ui';
import { ThemeToggle } from '@shared/theme';
import { useAuth } from '@shared/auth';
import {
  Logo,
  CollapsibleIcon,
  BuddyListIcon,
  ChatIcon,
  ApplicationIcon,
  NotificationIcon,
  AboutIcon,
} from '@shared/ui/icons';
import { useLocation } from 'react-router-dom';

const dashboardItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Buddy List',
    url: '/connections',
    icon: BuddyListIcon,
  },
  {
    title: 'Missions',
    url: '/missions',
    icon: LocateFixed,
  },
  {
    title: 'Filters',
    url: '/filters',
    icon: Settings2,
  },
  {
    title: 'Chats (18)',
    url: '/chats',
    icon: ChatIcon,
  },
  {
    title: 'Applications (4)',
    url: '/applications',
    icon: ApplicationIcon,
  },
];

const systemInfoItems = [
  {
    title: 'Profile',
    url: '/profile',
    icon: User,
  },
  {
    title: 'Notifications',
    url: '/notifications',
    icon: NotificationIcon,
  },
  {
    title: 'About',
    url: '/about',
    icon: AboutIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/">
          <Logo className="w-[125px] h-auto" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="gap-4">
            <SidebarGroupLabel asChild className="cursor-pointer">
              <CollapsibleTrigger>
                <CollapsibleIcon className="transition-transform rotate-180 group-data-[state=open]/collapsible:rotate-0 fill-sidebar-foreground" />
                <span className="uppercase tracking-[1.26px]">Dashboard</span>
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-0">
                  {dashboardItems.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className={pathname === item.url ? 'active-item' : ''}
                    >
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon strokeWidth="1" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup className="gap-4">
            <SidebarGroupLabel asChild className="cursor-pointer">
              <CollapsibleTrigger>
                <CollapsibleIcon className="transition-transform rotate-180 group-data-[state=open]/collapsible:rotate-0 fill-sidebar-foreground" />
                <span className="uppercase tracking-[1.26px]">
                  system information
                </span>
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {systemInfoItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon strokeWidth="1" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer"
                >
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <div className="mt-auto pt-4 border-t flex justify-between items-center">
              <span className="font-medium text-foreground text-sm">
                Select theme:
              </span>
              <ThemeToggle />
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <button className="flex items-center gap-3 cursor-pointer">
              <CollapsibleIcon className="rotate-90 size-2" />
              <span className="uppercase tracking-[1.26px] text-[9px] font-medium">
                Close
              </span>
            </button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
