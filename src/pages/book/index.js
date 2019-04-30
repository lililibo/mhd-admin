import React, { Component } from 'react';
import { Input, Table, Button } from 'antd';
import { BookWrap, TopWrap, MainWrap } from './style';
import http from '../../utils/http';



const columns = [{
  title: 'bookId',
  key: 'bookId',
  dataIndex: 'bookId'
},{
  title: 'bookName',
  key: '图书名',
  dataIndex: 'bookName'
},{
  title: 'author',
  key: '作者',
  dataIndex: 'author'
},{
  title: 'coverurl',
  key: '海报',
  dataIndex: 'coverurl',
  render: (text, record, index) => {
    return <img src={text} alt="" />
  }
}];

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputVal: '',
      pageNum: 1,
      pageSize: 1,
      pagination: { total: 1,
        pageSize: 1,
        onChange:this.onPageChange.bind(this) }
    }
    this.getBookList = this.getBookList.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render () {
    return(
      <BookWrap>
        <TopWrap>
          <div className="left">
            <Input 
            placeholder="请输入..."
            value={this.state.inputVal}
            onChange={this.onInputChange}
             />
            <Button type="primary" onClick={ this.getBookList.bind(null, true) }>搜索</Button>
          </div>
        </TopWrap>

        <MainWrap>
          <Table 
          dataSource={this.state.list} 
          columns={columns}
          rowKey="bookId"
          pagination={this.state.pagination}
          ></Table>
        </MainWrap>
      </BookWrap>
    )
  }

  componentDidMount() {
    this.getBookList();
  }
  onInputChange (e) {
    let value =e.target.value;
    this.setState(() => ({
      inputVal: value
    }))
  }

  onPageChange (page, pageSize) {
    this.setState(() => ({
      pageNum: page,
      pageSize: pageSize
    }), () => {
      this.getBookList();
    })
  }

  async getBookList (isSearch) {
    if (isSearch) {
      await this.setState(() => ({
        pageNum: 1
      }))
    }
    let { inputVal, pageNum, pageSize} =this.state;
    http.get('./api/book', {
      params: {
        bookName: inputVal,
        pageNum,
        pageSize
      }
    })
      .then(res => {
        if (res.code === 0){
          this.setState((prevState) => ({
            list: res.data.list,
            pagination: {
              ...prevState.pagination,
              total: res.data.total
            }
          }))
        }
      })
  }
}

export default Book;
