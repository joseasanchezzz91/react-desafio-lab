import React, { Component, Fragment } from "react";
import Table from "../table/Table";

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
      <Fragment>
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
                      <Button style={"primary"} event={() => handleClick(e)}>
                        RING
                      </Button>
                    </Td>
                    <Td>
                      <Button style={"danger"} event={() => handleKill(e)}>
                        KILL
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
      </Fragment>
    );
  }
}
