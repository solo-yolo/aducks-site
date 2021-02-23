<script>
    import { metatags } from '@roxi/routify';
    import { ready } from '@roxi/routify'
    const apiUrl = __myapp.env.API_URL

    metatags.title = 'Аутята'
    metatags.description = 'Description coming soon...'

    let data = {}
    console.log(`api url: ${apiUrl}`)
    fetch(apiUrl + '/foo')
        .then(response => response.json())
        .then(json => {data = json})
        .then($ready)


</script>

<section class="section">
    <div class="box"> <p>yo</p>
    <p>{data.message} from {apiUrl}</p>
    </div>
</section>