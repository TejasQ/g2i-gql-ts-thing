/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myQuery
// ====================================================

export interface myQuery_todos {
  __typename: "todos";
  id: number;
  text: string | null;
}

export interface myQuery {
  /**
   * fetch data from the table: "todos"
   */
  todos: myQuery_todos[];
}
