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

        dmc.Text("Limit max number of options that can be selected", mt=24),
        dmc_custom.MaxSelectedItems(),

        dmc.Text("Select with option to create new options", mt=24),
        dmc_custom.SelectCreatable(),

        dmc.Text("Limit max number of values that can be displayed", mt=24),
        dmc_custom.MaxDisplayedItems()
    ]
)

if __name__ == "__main__":
    app.run(debug=True)

