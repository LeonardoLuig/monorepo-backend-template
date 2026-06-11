export class RoleDITokens {
  public static readonly RoleRepository = Symbol('RoleRepository');

  public static readonly GetRoleByIdUseCase = Symbol('GetRoleByIdUseCase');

  public static readonly GetRoleListUseCase = Symbol('GetRoleListUseCase');

  public static readonly CreateRoleUseCase = Symbol('CreateRoleUseCase');

  public static readonly EditRoleUseCase = Symbol('EditRoleUseCase');

  public static readonly RemoveRoleUseCase = Symbol('RemoveRoleUseCase');
}
