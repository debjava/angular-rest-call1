export class PostModel1 {
    private name: string;
    private job: string;

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
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
     * @param {string} value
     */
	public set $name(value: string) {
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