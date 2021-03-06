const { makePrismaBindingClass } = require("prisma-binding");


/**
 * Type Defs
 */

const typeDefs = `type AggregateMedia {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Media implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  localSource: String!
  uploadUri: String
  bucket: String
  key: String
  region: String
  owner(where: UserWhereInput): User
}

"""A connection to a list of items."""
type MediaConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MediaEdge]!
  aggregate: AggregateMedia!
}

input MediaCreateInput {
  filename: String!
  localSource: String!
  uploadUri: String
  bucket: String
  key: String
  region: String
  owner: UserCreateOneInput
}

"""An edge in a connection."""
type MediaEdge {
  """The item at the end of the edge."""
  node: Media!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MediaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  localSource_ASC
  localSource_DESC
  uploadUri_ASC
  uploadUri_DESC
  bucket_ASC
  bucket_DESC
  key_ASC
  key_DESC
  region_ASC
  region_DESC
}

type MediaPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  localSource: String!
  uploadUri: String
  bucket: String
  key: String
  region: String
}

type MediaSubscriptionPayload {
  mutation: MutationType!
  node: Media
  updatedFields: [String!]
  previousValues: MediaPreviousValues
}

input MediaSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MediaSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MediaSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MediaSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MediaWhereInput
}

input MediaUpdateInput {
  filename: String
  localSource: String
  uploadUri: String
  bucket: String
  key: String
  region: String
  owner: UserUpdateOneInput
}

input MediaWhereInput {
  """Logical AND on all given filters."""
  AND: [MediaWhereInput!]

  """Logical OR on all given filters."""
  OR: [MediaWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MediaWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  localSource: String

  """All values that are not equal to given value."""
  localSource_not: String

  """All values that are contained in given list."""
  localSource_in: [String!]

  """All values that are not contained in given list."""
  localSource_not_in: [String!]

  """All values less than the given value."""
  localSource_lt: String

  """All values less than or equal the given value."""
  localSource_lte: String

  """All values greater than the given value."""
  localSource_gt: String

  """All values greater than or equal the given value."""
  localSource_gte: String

  """All values containing the given string."""
  localSource_contains: String

  """All values not containing the given string."""
  localSource_not_contains: String

  """All values starting with the given string."""
  localSource_starts_with: String

  """All values not starting with the given string."""
  localSource_not_starts_with: String

  """All values ending with the given string."""
  localSource_ends_with: String

  """All values not ending with the given string."""
  localSource_not_ends_with: String
  uploadUri: String

  """All values that are not equal to given value."""
  uploadUri_not: String

  """All values that are contained in given list."""
  uploadUri_in: [String!]

  """All values that are not contained in given list."""
  uploadUri_not_in: [String!]

  """All values less than the given value."""
  uploadUri_lt: String

  """All values less than or equal the given value."""
  uploadUri_lte: String

  """All values greater than the given value."""
  uploadUri_gt: String

  """All values greater than or equal the given value."""
  uploadUri_gte: String

  """All values containing the given string."""
  uploadUri_contains: String

  """All values not containing the given string."""
  uploadUri_not_contains: String

  """All values starting with the given string."""
  uploadUri_starts_with: String

  """All values not starting with the given string."""
  uploadUri_not_starts_with: String

  """All values ending with the given string."""
  uploadUri_ends_with: String

  """All values not ending with the given string."""
  uploadUri_not_ends_with: String
  bucket: String

  """All values that are not equal to given value."""
  bucket_not: String

  """All values that are contained in given list."""
  bucket_in: [String!]

  """All values that are not contained in given list."""
  bucket_not_in: [String!]

  """All values less than the given value."""
  bucket_lt: String

  """All values less than or equal the given value."""
  bucket_lte: String

  """All values greater than the given value."""
  bucket_gt: String

  """All values greater than or equal the given value."""
  bucket_gte: String

  """All values containing the given string."""
  bucket_contains: String

  """All values not containing the given string."""
  bucket_not_contains: String

  """All values starting with the given string."""
  bucket_starts_with: String

  """All values not starting with the given string."""
  bucket_not_starts_with: String

  """All values ending with the given string."""
  bucket_ends_with: String

  """All values not ending with the given string."""
  bucket_not_ends_with: String
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  region: String

  """All values that are not equal to given value."""
  region_not: String

  """All values that are contained in given list."""
  region_in: [String!]

  """All values that are not contained in given list."""
  region_not_in: [String!]

  """All values less than the given value."""
  region_lt: String

  """All values less than or equal the given value."""
  region_lte: String

  """All values greater than the given value."""
  region_gt: String

  """All values greater than or equal the given value."""
  region_gte: String

  """All values containing the given string."""
  region_contains: String

  """All values not containing the given string."""
  region_not_contains: String

  """All values starting with the given string."""
  region_starts_with: String

  """All values not starting with the given string."""
  region_not_starts_with: String

  """All values ending with the given string."""
  region_ends_with: String

  """All values not ending with the given string."""
  region_not_ends_with: String
  owner: UserWhereInput
}

input MediaWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createMedia(data: MediaCreateInput!): Media!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateMedia(data: MediaUpdateInput!, where: MediaWhereUniqueInput!): Media
  deleteUser(where: UserWhereUniqueInput!): User
  deleteMedia(where: MediaWhereUniqueInput!): Media
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertMedia(where: MediaWhereUniqueInput!, create: MediaCreateInput!, update: MediaUpdateInput!): Media!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyMedias(data: MediaUpdateInput!, where: MediaWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyMedias(where: MediaWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  medias(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media]!
  user(where: UserWhereUniqueInput!): User
  media(where: MediaWhereUniqueInput!): Media
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  mediasConnection(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MediaConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  media(where: MediaSubscriptionWhereInput): MediaSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
}
`;

const Prisma = makePrismaBindingClass({ typeDefs });
module.exports = { Prisma };
