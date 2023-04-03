import jwt_decode from "jwt-decode";

/**
 * A function that returns true if a given JWT token is valid and false if it is not.
 * @param token (string) -> optional argument to avoid calling localStorage more than neccessary.
 * @returns (boolean) either true or false based on if the token is valid (based on expiration)
 */
export const ValidateToken = (passToken?: string) => {
    if (passToken) {
        const decoded = <any>jwt_decode(passToken);
        if (decoded.exp > Math.floor(Date.now() / 1000)) {
            return true;
        } else {
            localStorage.removeItem("credentials");
            return false;
        }
    } else {
        const token = localStorage.getItem("credentials");
        if (token) {
            const decoded = <any>jwt_decode(token);
            if (decoded.exp > decoded.iat) {
                return true;
            }
            return false;
        }
        return false;
    }
};

export { };
