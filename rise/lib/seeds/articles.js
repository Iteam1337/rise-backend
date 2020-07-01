exports.seed = function (knex) {
  return knex('articles')
    .del()
    .then(async function () {
      return knex.raw(
        `INSERT INTO
          "articles" ("title", "type", "url", "video_url", "img_url", "categories", "introduction", "text")
            VALUES
          ('Välkommen!', 'video', 'https://www.happify.com/', 'https://vimeo.com/152432001', '', '{066167db-bd1b-4002-850a-9c0c3571375a}' ,'Den här appen ger dig kunskap och verktyg för att du ska själv ska kunna må bra psykiskt.', 'Om du känner att du behöver professionell hjälp, vård och behandling vill vi att du ringer 1177 eller vänder dig till 1177.se. Du kan såklart fortsätta använda appen även om du samtidigt får professionell hjälp, vård eller behandling.'),
          ('Vad är psykisk hälsa\\?*', 'image', 'https://www.happify.com/', '', '/static/images/RISE_looop_cat-img_full_Psykisk-halsa.jpg', '{99596c21-37f8-47f8-a6dc-e747556a6e7e}','Kortare intro-text om vad psykisk hälsa är - psykoedukation - som också lockar användaren till att läsa mer.', 'Detta är en lite längre text på ungefär exakt 1448 tecken inklusive blanksteg. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc'),
('Vill du ha tips\\?', 'image', 'https://www.happify.com/', '', '/static/images/RISE_looop_cat-img_full_Psykisk-halsa.jpg', '{99596c21-37f8-47f8-a6dc-e747556a6e7e}','Text som förklarar varför det är bra att göra quizzet (hänvisning/guidning kring teman att jobba på eller appar/tjänster som passar dig)', 'Detta är en lite längre text på ungefär exakt 1448 tecken inklusive blanksteg. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc')`
      )
    })
}
