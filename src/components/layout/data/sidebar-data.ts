import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  HelpCircle,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Settings,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { ClerkLogo } from '@/assets/clerk-logo'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'Geral',
      items: [
        {
          title: 'Painel',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Tarefas',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'Aplicativos',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'Conversas',
          url: '/chats',
          badge: '3',
          icon: MessagesSquare,
        },
        {
          title: 'Usuários',
          url: '/users',
          icon: Users,
        },
        {
          title: 'Protegido por Clerk',
          icon: ClerkLogo,
          items: [
            {
              title: 'Entrar',
              url: '/clerk/sign-in',
            },
            {
              title: 'Cadastrar',
              url: '/clerk/sign-up',
            },
            {
              title: 'Gerenciamento de Usuários',
              url: '/clerk/user-management',
            },
          ],
        },
      ],
    },
    {
      title: 'Páginas',
      items: [
        {
          title: 'Autenticação',
          icon: ShieldCheck,
          items: [
            {
              title: 'Entrar',
              url: '/sign-in',
            },
            {
              title: 'Entrar (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Cadastrar',
              url: '/sign-up',
            },
            {
              title: 'Esqueci a Senha',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Erros',
          icon: Bug,
          items: [
            {
              title: 'Não Autorizado',
              url: '/errors/unauthorized',
              icon: Lock,
            },
            {
              title: 'Proibido',
              url: '/errors/forbidden',
              icon: UserX,
            },
            {
              title: 'Não Encontrado',
              url: '/errors/not-found',
              icon: FileX,
            },
            {
              title: 'Erro Interno do Servidor',
              url: '/errors/internal-server-error',
              icon: ServerOff,
            },
            {
              title: 'Erro de Manutenção',
              url: '/errors/maintenance-error',
              icon: Construction,
            },
          ],
        },
      ],
    },
    {
      title: 'Outros',
      items: [
        {
          title: 'Configurações',
          icon: Settings,
          items: [
            {
              title: 'Perfil',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Conta',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'Aparência',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'Notificações',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'Exibição',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
        {
          title: 'Central de Ajuda',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
