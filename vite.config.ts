import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// node 核心模块  用于解析路径   需要安装“@types/node” 模块
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  }
})
