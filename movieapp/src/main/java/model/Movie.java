package model;

public class Movie {
	private static int movieCounter = 1;
	private int id;
    private String name;
    private int views;
    private float rating;
    
	public Movie(String name, int views, float rating) {
		super();
		this.id = movieCounter++;
		this.name = name;
		this.views = views;
		this.rating = rating;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getViews() {
		return views;
	}

	public void setViews(int views) {
		this.views = views;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}
	
}
