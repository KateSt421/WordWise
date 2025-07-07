import { makeAutoObservable, runInAction } from "mobx";

const API_URL = "http://itgirlschool.justmakeit.ru/api/words";

class WordStore {
  words = [];
  isLoading = false;
  error = null;
  learnedWords = {};
  learnedWordsCount = 0;

  constructor() {
    makeAutoObservable(this);
    this.fetchWords();
  }

  async fetchWords() {
    this.isLoading = true;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      runInAction(() => {
        this.words = data;
        this.error = null;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async addWord(newWord) {
    try {
      const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          english: newWord.english,
          transcription: newWord.transcription,
          russian: newWord.russian,
          tags: newWord.tags || "",
          tags_json: newWord.tags || "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add word");
      }

      await this.fetchWords();
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      });
      throw err;
    }
  }

  async updateWord(id, updatedWord) {
    try {
      const response = await fetch(`${API_URL}/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          english: updatedWord.english,
          transcription: updatedWord.transcription,
          russian: updatedWord.russian,
          tags: updatedWord.tags || "",
          tags_json: updatedWord.tags || "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update word");
      }

      await this.fetchWords();
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      });
      throw err;
    }
  }

  async deleteWord(id) {
    try {
      const response = await fetch(`${API_URL}/${id}/delete`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete word");
      }

      await this.fetchWords();
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      });
      throw err;
    }
  }

  markWordAsLearned(wordId) {
    if (!this.learnedWords[wordId]) {
      this.learnedWords = {
        ...this.learnedWords,
        [wordId]: true,
      };
      this.learnedWordsCount += 1;
    }
  }
}

export const wordStore = new WordStore();
