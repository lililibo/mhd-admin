import React from 'react';
import { BookWrap, TopWrap, MainWrap } from './style';
import { Input, Table, Button } from 'antd';

class BookUI extends React.Component {
  render () {
    const { inputVal, onInputChange, searchBtnClick, list, columns, pagination } = this.props;
    return (
      <BookWrap>
        <TopWrap>
          <div className="left">
            <Input 
            placeholder="请输入..."
            value={inputVal}
            onChange={onInputChange}
             />
            <Button type="primary" onClick={ searchBtnClick }>搜索</Button>
          </div>
        </TopWrap>

        <MainWrap>
          <Table 
          dataSource={ list } 
          columns={ columns }
          rowKey="bookId"
          pagination={ pagination }
          ></Table>
        </MainWrap>
      </BookWrap>
    )
  }

  componentDidMount () {
    this.props.getBookList();
  }
}

export default BookUI;
