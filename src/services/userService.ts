
interface User{
    id: number;
    name: string;
    email: string;
}

export const getAllUsers = (): User[] => {
    return [
        {id: 1, name: "John Doe", email: "john@example.com"},
        {id: 2, name: "Jane Smith", email: "jane@example.com"}
    ];
}