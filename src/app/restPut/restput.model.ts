export class RestPutModel {
    private name: String;
    private job: string;

    /**
     * Getter $name
     * @return {String}
     */
	public get $name(): String {
		return this.name;
	}

    /**
     * Getter $job
     * @return {string}
     */
	public get $job(): string {
		return this.job;
	}

    /**
     * Setter $name
     * @param {String} value
     */
	public set $name(value: String) {
		this.name = value;
	}

    /**
     * Setter $job
     * @param {string} value
     */
	public set $job(value: string) {
		this.job = value;
	}

}