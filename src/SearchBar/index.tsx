import React, { useState } from 'react';
import { Button, Input, Space, Tag } from 'antd'
import { RedoOutlined, SearchOutlined, DeleteOutlined } from '@ant-design/icons';

interface ISearchBarProps {
  // 类似于标题的东西
  sticky?: React.ReactNode;
}

export default ({ sticky }: ISearchBarProps) => {

  // 刷新
  const onRefresh = () => {
    console.log("refresh");
  }
  // sticky

  // 搜索
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = () => {
    if (!searchValue) return
    setParams({
      ...params,
      [searchOption.key]: searchValue
    })
    setSearchValue("")
  }

  // 搜索的参数。又用户传递。一般只有一个。剩下的都是通过 table 筛选/untreatedParamsKeys 隐藏的key
  const searchOption = {
    key: "project",
    title: 'project'
  }

  const [params, setParams] = useState({
    type: "1",
    status: "2"
  })
  const paramsAlias = {
    type: { title: "类型", value: "" },
    status: { title: "状态", value: "" }
  }

  const untreatedParamKeys = ["status"]

  const handleCloseTag = (param: string) => {
    const newParams = { ...params, [param]: "" }
    // 删除空值
    Object.keys(newParams).forEach(key => {
      if (!newParams[key]) {
        delete newParams[key]
      }
    })
    setParams(newParams)
  }

  const handleTrashAllTag = () => {
    setParams({})
  }

  // 第一步，把 params 添加到 tags 中
  const renderTags = () => {
    // 其实 params 只负责渲染 tag
    let showParams = Object.keys(params);
    showParams = showParams.filter(item => !untreatedParamKeys.includes(item))
    // untreatedParamKeys.map(item => {
    //   const index = showParams.findIndex(item)
    //   if (index > 0) {
    //     showParams.splice(index, 1)
    //   }
    // })
    console.log('showParams', showParams)

    return <>
      {showParams.map(param => (<Tag closable onClose={() => handleCloseTag(param)}>{paramsAlias[param]?.title || param} {params[param]}</Tag>))}
      {showParams.length > 0 && <DeleteOutlined onClick={handleTrashAllTag} />}
    </>
  }

  return <>
    <Space>
      <Button icon={<RedoOutlined />} onClick={onRefresh} />
      {sticky && sticky}
      <Input
        placeholder='搜索'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        suffix={<SearchOutlined onClick={handleSearch} />}
        onPressEnter={handleSearch}
      />
      {renderTags()}
    </Space>

  </>
};
