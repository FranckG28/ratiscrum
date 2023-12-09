export interface NavItem {
    title: string
    subtitle?: string
    info?: React.ReactNode;
    isActive: boolean;
    url: string;
}
