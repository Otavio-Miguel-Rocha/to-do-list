export class User {
  id: string = "";
  name: string = "";
  password: string = "";
  email: string = "";
  groups?: string[] = [];
  cardPermissions?: string[] = [];
  propertiesPermissions?: string[] = [];
}
