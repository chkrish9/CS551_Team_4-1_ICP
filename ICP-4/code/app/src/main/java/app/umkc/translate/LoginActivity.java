package app.umkc.translate;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity {

    /*
    * onCreate will call after LoginActivity render.
    * In this we will load the initial data and set the properties of the controls.
    */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    /*
    * Login method will call when user click on login button
    */
    public void login(View v)
    {
        //Getting values from text fields controls.
        EditText txtUsername = (EditText) findViewById(R.id.txtUsername);
        EditText txtPassword = (EditText) findViewById(R.id.txtPassword);
        TextView lblUsernameError = (TextView) findViewById(R.id.lblUsernameError);
        TextView lblPasswordError = (TextView) findViewById(R.id.lblPasswordError);

        //Getting values from controls.
        String username = txtUsername.getText().toString();
        String password = txtPassword.getText().toString();

        //Setting empty string to the error labels.
        lblUsernameError.setText("");
        lblPasswordError.setText("");

        //Checking the username is empty or not.
        if(username.isEmpty())
        {
            lblUsernameError.setText("Please enter the username.");
        }
        //Checking the password is empty or not.
        else if(password.isEmpty())
        {
            lblPasswordError.setText("Please enter password");
        }
        //Validating the username and password.
        else if(username.equalsIgnoreCase("murali") && password.equals("Murali"))
        {
            Intent redirect = new Intent(LoginActivity.this,TranslateActivity.class);
            startActivity(redirect);
        }
        else {
            lblPasswordError.setText("Invalid Username/Password.");
        }
    }
}
