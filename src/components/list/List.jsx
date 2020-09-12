import React, { Component } from "react";
import Table from "../table/Table";
import Thead from "../table/Thead";
import Tr from "../table/Tr";
import Th from "../table/Th";
import Tbody from "../table/Tbody";
import Td from "../table/Td";
import Button from "../button/Button";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: "JUAN" },
        { id: 2, name: "Maria" },
        { id: 3, name: "JOSE" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Table>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Name</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.list.map((user, i) => (
              <Tr key={i}>
                <Td> {user.id}</Td>
                <Td> {user.name}</Td>

                <Td>
                  <Button style={"primary"} event={() => console.log("edit")}>
                    RING
                  </Button>
                </Td>
                <Td>
                  <Button style={"danger"} event={() => console.log("delete")}>
                    KILL
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    );
  }
}
