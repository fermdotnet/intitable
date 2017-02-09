export interface SettingsInterface{
    columns: {
        [key: string]:{
            title: string,
            width?: string,
            sortable?: boolean,
            toggleButton?: boolean,
            subitem?: string
        }
    },
    tableClass?: string[],
    sort: Sort,
    paginator?: Paginator,
    search?: {
        [key: string]: {
            type: string
            data?: any,
            key?: {
                caption: string,
                value: string
            }
        }
    },
    buttons?: {
        [key: string]: {
            icon: string,
            bg: string
        }
    },
    buttonsWidth?: string
}

export interface Sort{
    column: string,
    order: string
}

export interface Paginator{
    actual: number,
    items: number,
    pagesFoo: number[]
}
