export interface IGuy {
  id: number;
  top: number;
  left: number;
  height: number;
  width: number;
  name: string;
  gender: string;
  lookingFor?: string;
  profileText?: string;
  avatar: string;
  img?: string;
}
