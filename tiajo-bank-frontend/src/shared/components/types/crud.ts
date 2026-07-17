import type { ReactNode } from "react";

export interface CrudColumn<T> {
    key: keyof T | string;
    title: string;
    width?: number;
    align?: "start" | "center" | "end",
    sortable?: boolean;
    loading?: boolean;
    render?: (item: T) => ReactNode;
}

export interface CrudAction<T> {
    label: string;
    icon: string;
    color?: | "primary" | "success" | "warning" | "danger" | "secondary";
    onClick(item: T): void;
}

export interface CrudFilterOption {
    label: string;
    value: string | number;
}

export interface CrudFilter{
    label: string;
    value: string | number;
    options: CrudFilterOption[];
    onChange(value: string): void;
}

export interface CrudHeaderProps {
    title: string;
    subtitle?: string;
    icon?: string;
    buttonText?: string;
    onCreate?(): void;
}

export interface CrudModalProps {
    title: string;
    size?: "sm" | "md" | "lg" | "xl";
    children: ReactNode;
    footer?: ReactNode;
}