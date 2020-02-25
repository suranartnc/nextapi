/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */


import { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
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
  Movie: { // root type
    id: string; // ID!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
  Student: { // root type
    fname: string; // String!
    id: string; // ID!
    lname: string; // String!
  }
  Node: NexusGenRootTypes['Movie'] | NexusGenRootTypes['Student'];
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
  Movie: { // field return type
    id: string; // ID!
    title: string; // String!
  }
  Mutation: { // field return type
    createMovie: NexusGenRootTypes['Movie']; // Movie!
  }
  Query: { // field return type
    movie: NexusGenRootTypes['Movie']; // Movie!
    student: NexusGenRootTypes['Student']; // Student!
  }
  Student: { // field return type
    fname: string; // String!
    id: string; // ID!
    lname: string; // String!
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createMovie: { // args
      email?: string | null; // String
      username?: string | null; // String
    }
  }
  Query: {
    movie: { // args
      id?: string | null; // String
    }
    student: { // args
      id?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Node: "Movie" | "Student"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Movie" | "Mutation" | "Query" | "Student";

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
     * The complexity for an individual field. Return a number
     * or a function that returns a number to specify the
     * complexity for this field.
     */
    complexity?: QueryComplexity<TypeName, FieldName>
    
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