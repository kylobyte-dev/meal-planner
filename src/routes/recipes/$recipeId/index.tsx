import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/recipes/$recipeId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Recipe Name: Pancakes</h1>
    <div>
      <h3>Ingredienti</h3>
      <ul>
        <li>Farina</li>
        <li>Burro</li>
        <li>Uova</li>
        <li>Latte</li>
        <li>Zucchero</li>
      </ul>
    </div>
    <div>
      <h3>Preparazione</h3>
      <ol>
        <li>sciogliere il burro in un pentolino e lasciate intiepidire, poi separate i tuorli dagli albumi. Versate nella ciotola con i tuorli il burro fuso intiepidito 1 e il latte 2. Mescolate con una frusta, poi unite la farina setacciata 3.</li>
        <li>Setacciate anche il lievito 4 e incorporate le polveri con la frusta, poi aggiungete il sale 5 e mescolate ancora per ottenere un composto omogeneo. Ora prendete la ciotola con gli albumi e iniziate a montarli con le fruste elettriche 6.</li>
        <li>Versate gradualmente lo zucchero 7 e continuate a lavorare con le fruste per montare gli albumi a neve 8. Aggiungete gli albumi montati a neve nel composto di tuorli 9.</li>
        <li>Mescolate delicatamente con la frusta dal basso verso l’alto per incorporarli in modo uniforme 10. Siete pronti per cuocere i pancake: scaldate una padella antiaderente con pochissimo burro aiutandovi con della carta da cucina 11, poi versate al centro un mestolo di impasto 12.</li>
        <li>Lasciate cuocere a fuoco moderato per un paio di minuti; quando compariranno le prime bollicine girate delicatamente il pancake con l’aiuto di una spatola 13 e cuocetelo brevemente anche dall’altro lato fino a doratura 14. Man mano che saranno pronti trasferiteli su un piatto senza impilarli, in modo che non si sgonfino. Una volta che saranno tutti pronti, potete impilare i vostri pancake e servirli con abbondante sciroppo d’acero 15!</li>
      </ol>
    </div>
  </div>
}
