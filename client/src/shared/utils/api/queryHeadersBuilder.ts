export class QueryHeadersBuilder {
    private headers: Record<string, string> = {};

    public setBearerToken(token: string) {
        this.headers = { ...this.headers, Authorization: `Bearer ${token}` };
        return this;
    }

    public build() {
        return this.headers;
    }
}
