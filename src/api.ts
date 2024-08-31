const apiKey = "ef6fdfa517524b82677ac75fac000967"; 

export const getWeatherData = async (city: string) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    if (!res.ok) {
      throw new Error("Havo ma'lumotlarini olishda xato yuz berdi.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Havo ma'lumotlarini olishda xato: ${error}}`);
  }
};
