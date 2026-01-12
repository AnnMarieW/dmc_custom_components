import dmc_custom_components as dmc_custom
import dash_mantine_components as dmc
import dash

app = dash.Dash()


app.layout = dmc.MantineProvider(
    children=[
        dmc.Alert(
            "Welcome to Dash Mantine Components",
            title="Hello!",
            color="violet",
        ),
        dmc_custom.ManySelect(),
        dmc_custom.SelectCreatable()
    ]
)

if __name__ == "__main__":
    app.run(debug=True)

