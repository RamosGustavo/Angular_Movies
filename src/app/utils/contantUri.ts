const baseUrl = "https://apimovies.org/3";
export class ConstantUri {
    public static readonly apikey = "dea5c97344a7405e73e0a8812b495147";
    public static readonly validateWithLogin = baseUrl + "/authentication/token/validate_with_login";
    public static readonly tokenNew = baseUrl + "/authentication/token/new";
    public static readonly popularMovies = baseUrl + "/movie/popular";

}
