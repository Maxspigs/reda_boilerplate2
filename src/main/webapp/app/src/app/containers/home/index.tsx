import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

export namespace Home {
  export interface Props extends RouteComponentProps<void> {

  }
}



export class Home extends React.Component<Home.Props> {

  render() {
    const data = [{
      name: "Tanner Linsley",
      age: 26,
      friend: {
        name: "Jason Maurer",
        age: 23,
      }
    }];
    
    const columns = [{
      Header: "Name",
      accessor: "name" // String-based value accessors!
    }, {
      Header: "Age",
      accessor: "age",
      Cell: (props: any) => <span className="number">{props.value}</span> // Custom cell components!
    }, {
      id: "friendName", // Required because our accessor is not a string
      Header: "Friend Name",
      accessor: (d: any) => d.friend.name // Custom value accessors!
    }, {
      Header: () => <span>Friend Age</span>, // Custom header components!
      accessor: "friend.age"
    }];
    return (
      <ReactTable
          data={data}
          columns={columns}
        />
    );
  }
}

