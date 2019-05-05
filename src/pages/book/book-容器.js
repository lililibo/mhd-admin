import React, { Component } from 'react';
import BookUI from './ui';


import store from '@/store';
import { inputChange, getBookListAction, searchBookAction, pageClickAction } from './store/createActions';


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
      list: store.getState().book.list,
      inputVal: store.getState().book.inputVal,
      pageNum: store.getState().book.pageNum,
      pageSize: store.getState().book.pageSize,
      pagination: { 
        total: store.getState().book.total,
        pageSize: store.getState().book.pageSize,
        onChange:this.onPageChange.bind(this) 
      }
    }

    store.subscribe(() => {
      this.setState(() => ({
        list: store.getState().book.list,
        inputVal: store.getState().book.inputVal,
        pageNum: store.getState().book.pageNum,
        pageSize: store.getState().book.pageSize,
        pagination: { 
          total: store.getState().book.total,
          pageSize: store.getState().book.pageSize,
          onChange:this.onPageChange.bind(this) 
        }
      }))
    })
  }
  render () {
    return(
      <BookUI 
        inputVal = {this.state.inputVal}
        onInputChange ={this.onInputChange}
        searchBtnClick = {() => { store.dispatch(searchBookAction())}}
        list = {this.state.list}
        columns = {columns}
        pagination = {this.state.pagination}
        />
    )
  }

  componentDidMount() {
    store.dispatch(getBookListAction());
  }

  onInputChange (e) {
    let value =e.target.value;
    store.dispatch(inputChange(value))
  }

  onPageChange (page, pageSize) {
    store.dispatch(pageClickAction(page))
    // this.setState(() => ({
    //   pageNum: page,
    //   pageSize: pageSize
    // }), () => {
    //   this.getBookList();
    // })
  }
}

export default Book;
