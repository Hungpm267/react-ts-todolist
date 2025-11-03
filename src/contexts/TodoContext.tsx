// src/contexts/TodoContext.tsx

import React, { createContext, useContext, ReactNode } from "react";
// 1. Import hook logic của chúng ta
import { useTodoLogic } from "../hooks/useTodoLogic";

// 2. Tự động lấy "kiểu" (type) của các giá trị trả về từ hook
// Đây là một "mánh" (trick) hay của TypeScript
type TodoContextType = ReturnType<typeof useTodoLogic>;

// 3. Tạo Context
// Nó giống như tạo ra "Tên Wi-Fi"
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// 4. Tạo "Bộ phát" (Provider)
// Đây là component sẽ "phát sóng"
export function TodoProvider({ children }: { children: ReactNode }) {
  // 5. Gọi hook logic ở bên trong
  const todoLogic = useTodoLogic();

  // 6. Phát (Provide) các giá trị (tasks, handleAddTask, ...)
  return <TodoContext.Provider value={todoLogic}>{children}</TodoContext.Provider>;
}

// 7. Tạo hook "kết nối" (Consumer)
// Đây là cách dễ dàng để các component con "bắt sóng Wi-Fi"
export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodos phải được dùng bên trong một TodoProvider");
  }
  return context;
}
