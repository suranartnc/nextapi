/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */


import { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    connectionField<FieldName extends string>(
            fieldName: FieldName, 
            config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName> 
          ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  StatusEnum: "ACTIVE" | "DISABLED"
}

export interface NexusGenRootTypes {
  Account: { // root type
    email: string; // String!
    id: string; // ID!
    username: string; // String!
  }
  AccountConnection: { // root type
    edges?: Array<NexusGenRootTypes['AccountEdge'] | null> | null; // [AccountEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AccountEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Account']; // Account!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  Node: NexusGenRootTypes['Account'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  StatusEnum: NexusGenEnums['StatusEnum'];
}

export interface NexusGenFieldTypes {
  Account: { // field return type
    email: string; // String!
    friends: NexusGenRootTypes['Account'][]; // [Account!]!
    friendsConnection: NexusGenRootTypes['AccountConnection']; // AccountConnection!
    id: string; // ID!
    username: string; // String!
  }
  AccountConnection: { // field return type
    edges: Array<NexusGenRootTypes['AccountEdge'] | null> | null; // [AccountEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AccountEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Account']; // Account!
  }
  Mutation: { // field return type
    createUser: NexusGenRootTypes['Account']; // Account!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    account: NexusGenRootTypes['Account']; // Account!
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenArgTypes {
  Account: {
    friendsConnection: { // args
      after?: string | null; // String
      first: number; // Int!
    }
  }
  Mutation: {
    createUser: { // args
      email?: string | null; // String
      username?: string | null; // String
    }
  }
  Query: {
    account: { // args
      name?: string | null; // String
      status?: NexusGenEnums['StatusEnum'] | null; // StatusEnum
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Node: "Account"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Account" | "AccountConnection" | "AccountEdge" | "Mutation" | "PageInfo" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "StatusEnum";

export type NexusGenInterfaceNames = "Node";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
    /**
     * The nullability guard can be helpful, but is also a pottentially expensive operation for lists.
     * We need to iterate the entire list to check for null items to guard against. Set this to true
     * to skip the null guard on a specific field if you know there's no potential for unsafe types.
     */
    skipNullGuard?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
}