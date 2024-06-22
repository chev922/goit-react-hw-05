import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
    method: "GET",
    params: { language: "ua" },
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjQyZDJiMGVkZDJmYzZjMGEyMjM5ZjAwMDNiNjVjNyIsIm5iZiI6MTcxOTA0Mzg0Ny43MzI4Nywic3ViIjoiNjY3NWRiOTY4YzYwMmQ3MzdjNGVlN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.botjCLw1lZ_qytqQMKklJWkcTxpo5Dx8C6C3fFjY6ro",
    },
};

const optionsUs = {
    method: "GET",
    params: { language: "en-US" },
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjQyZDJiMGVkZDJmYzZjMGEyMjM5ZjAwMDNiNjVjNyIsIm5iZiI6MTcxOTA0Mzg0Ny43MzI4Nywic3ViIjoiNjY3NWRiOTY4YzYwMmQ3MzdjNGVlN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.botjCLw1lZ_qytqQMKklJWkcTxpo5Dx8C6C3fFjY6ro",
    },
};

export async function getTrendingMovies() {
    const response = await axios.get("trending/movie/week", options);
    return response.data.results;
}

export async function getDetailsMovie(id) {
    const response = await axios.get(`movie/${id}`, options);
    return response.data;
}

export async function getMovieCast(id) {
    const response = await axios.get(`movie/${id}/credits`, options);

    return response.data;
}

export async function getMovieReviews(id) {
    const response = await axios.get(`movie/${id}/reviews`, optionsUs);

    return response.data;
}

export async function searchMovies(search) {
    const response = await axios.get(
        `search/movie?page=1&query=${search}`,
        options
    );
    return response.data.results;
}