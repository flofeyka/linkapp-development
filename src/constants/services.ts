export type serviceType = {
    id: number;
    title: string;
    icon: string;
    subpoints: {
        id: number;
        title: string;
    }[]
}

export const services: serviceType[] = [
    {
        id: 1,
        icon: "idea",
        title: "идея и продвижение",
        subpoints: [
            {
                id: 1,
                title: "Генерация идеи"
            },
            {
                id: 2,
                title: "Анализ данных"
            },
            {
                id: 3,
                title: "Сравнение с конкурентами"
            },
            {
                id: 4,
                title: "План по реализации"
            },
            {
                id: 5,
                title: "SEO-оптимизация"
            }
        ]
    },
    {
        id: 2,
        title: "разработка и проектирование",
        icon: "dev",
        subpoints: [
            {
                id: 6,
                title: "Многостраничный сайт"
            },
            {
                id: 7,
                title: "Лендинг"
            },
            {
                id: 8,
                title: "Веб-приложение"
            },
            {
                id: 9,
                title: "Социальная сеть"
            },
            {
                id: 10,
                title: "Интернет-магазин"
            },
            {
                id: 11,
                title: "Сервер"
            }
        ]
    },
    {
        id: 3,
        title: "тестирование и отладка",
        icon: "test",
        subpoints: [
            {
                id: 12,
                title: "Ручное тестирование"
            },
            {
                id: 13,
                title: "Автоматическое тестирование"
            },
            {
                id: 14,
                title: "Unit-тестирование"
            },
            {
                id: 15,
                title: "e2e-тестирование"
            }
        ]
    },
    {
        id: 4,
        title: "продакш и публикация",
        icon: "release",
        subpoints: [
            {
                id: 16,
                title: "DevOps-инжиниринг"
            },
            {
                id: 17,
                title: "Безопасное хранение данных"
            },
            {
                id: 18,
                title: "Интеграция с любым сервером"
            },
            {
                id: 19,
                title: "Шифрование данных"
            }
        ]
    }
]