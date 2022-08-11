import React from 'react'
import { Button } from 'antd'
export default ({ type }: { type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined }) => {
  return <Button type={type}>button</Button>
}
