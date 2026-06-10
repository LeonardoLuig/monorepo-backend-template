export interface IUseCase<TPort, TResult> {
  execute(port: TPort): Promise<TResult>;
}
