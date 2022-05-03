# en-list

Export [eudic](https://dict.eudic.net/)'s words, use API:

```sh
curl -H "Authorization: ${{ secrets.EUDIC_TOKEN }}" -A "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0" https://api.frdic.com/api/open/v1/studylist/words?language=en > words.json
```

## API Docs(Chinese/中文)

1. [开发指南](https://my.eudic.net/OpenAPI/Doc_Index) (must login)
