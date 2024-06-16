export interface I_AppRoute {
  name: string;
  route: string;
  component: JSX.Element;
  img?: string;
  active: JSX.Element;
}
