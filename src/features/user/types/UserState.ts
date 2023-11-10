import User from "./User";

export default interface UserState {
  user: User | undefined
  isLoading: boolean
  error: null | string
}