export class UserDITokens {
  public static readonly UserRepository = Symbol('UserRepository');

  public static readonly GetUserByIdUseCase = Symbol('GetUserByIdUseCase');

  public static readonly GetUserListUseCase = Symbol('GetUserListUseCase');

  public static readonly CreateUserUseCase = Symbol('CreateUserUseCase');

  public static readonly EditUserUseCase = Symbol('EditUserUseCase');

  public static readonly RemoveUserUseCase = Symbol('RemoveUserUseCase');
}
