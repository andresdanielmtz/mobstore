export interface BreadcrumbEntry {
    name: string;
    path: string;
}

export interface BreadCrumbsProps {
    entries?: BreadcrumbEntry[];
}