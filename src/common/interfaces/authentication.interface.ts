import { AppRoles } from "@common/constants/app.roles";

export interface IAuthenticationPayload {
	user: {
		id: number;
		idx: string;
	};
	payload: {
		access_token: string;
		refresh_token?: string;
	};
}

export interface JwtPayload {
	username: string;
	role: AppRoles;
	iat?: Date;
}
