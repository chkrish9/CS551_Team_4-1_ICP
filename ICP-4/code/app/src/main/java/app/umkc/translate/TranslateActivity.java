package app.umkc.translate;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class TranslateActivity extends AppCompatActivity {

    //Declaring the variable.
    private Map<String, String> langs = new HashMap<String, String>();
    private Spinner spnLangList = null;
    private EditText txtTranslate = null;
    private TextView lblOutPutTranslateText = null;
    private String url = "https://translate.yandex.net/api/v1.5/tr.json/translate?" +
            "key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e." +
            "c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text=%s&" +
            "lang=en-%s&[format=plain]&[options=1]&[callback=set]";

    /*
     * onCreate will call after LoginActivity render.
     * In this we will load the initial data and set the properties of the controls.
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_translate);

        //Setting the Toolbar properties.
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        //Call loadLangList() function to fill the Languages list.
        loadLangList();
        //Getting all keys from lang maps.
        List<String> langListKeys = new ArrayList<String>(langs.keySet());

        //Setting the adapter for spinner.
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, langListKeys);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        //Getting spinner using Id.
        spnLangList = (Spinner) findViewById(R.id.spnLangList);
        //Adding adapter to spinner.
        spnLangList.setAdapter(adapter);
    }

    /*
    * Translate method will call when the user clicks translate button in Translate activity.
    */
    public void Translate(View v) {
        //Getting controls by id.
        txtTranslate = (EditText) findViewById(R.id.txtTranslate);
        lblOutPutTranslateText = (TextView) findViewById(R.id.lblOutPutTranslateText);
        final TextView lblTransalte = (TextView) findViewById(R.id.lblTranslateText);

        //Getting selected language and entered input..
        String selectedLang = langs.get(spnLangList.getSelectedItem().toString());
        String inputText = txtTranslate.getText().toString();

        //Formatting the URL with entered input and selected language.
        String formatedUrl = String.format(url, inputText, selectedLang);

        //Initialing the OkHttpClient.
        OkHttpClient client = new OkHttpClient();

        try {
            //Creating the request object with url.
            Request request = new Request.Builder()
                    .url(formatedUrl)
                    .build();
            //Calling the yandex API for translation.
            client.newCall(request).enqueue(new Callback() {
                //If request fail it will call onFailure method.
                @Override
                public void onFailure(Call call, IOException e) {
                    System.out.println(e.getMessage());
                }

                //If request success it will call onResponse method.
                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    final JSONObject jsonResult;
                    final String result = response.body().string();
                    try {
                        //Converting the result to Json object.
                        jsonResult = new JSONObject(result);
                        //Getting text array from result.
                        JSONArray convertedTextArray = jsonResult.getJSONArray("text");
                        final String convertedText = convertedTextArray.get(0).toString();
                        Log.d("okHttp", jsonResult.toString());
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                //Setting the Translate label to visible and setting the result.
                                lblTransalte.setVisibility(View.VISIBLE);
                                lblOutPutTranslateText.setText(convertedText);
                            }
                        });
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });
        } catch (Exception ex) {
            lblOutPutTranslateText.setText(ex.getMessage());
        }

    }

    /*
    * Logout method will call when logout button is clicked.
    * We are redirecting to loginActivity.
    */
    public void logout(View v) {
        Intent redirect = new Intent(TranslateActivity.this, LoginActivity.class);
        startActivity(redirect);
    }

    /*
    * loadLangList method will fill the lang map.
    */
    public void loadLangList() {
        langs.put("Azerbaijan", "az");
        langs.put("Malayalam", "ml");
        langs.put("Albanian", "sq");
        langs.put("Maltese", "mt");
        langs.put("Amharic", "am");
        langs.put("Macedonian", "mk");
        langs.put("Maori", "mi");
        langs.put("Arabic", "ar");
        langs.put("Marathi", "mr");
        langs.put("Armenian", "hy");
        langs.put("Mari", "mhr");
        langs.put("Afrikaans", "af");
        langs.put("Mongolian", "mn");
        langs.put("Basque", "eu");
        langs.put("German", "de");
        langs.put("Bashkir", "ba");
        langs.put("Nepali", "ne");
        langs.put("Belarusian", "be");
        langs.put("Bengali", "bn");
        langs.put("Norwegian", "no");
        langs.put("Punjabi", "pa");
        langs.put("Burmese", "my");
        langs.put("Papiamento", "pap");
        langs.put("Bulgarian", "bg");
        langs.put("Persian", "fa");
        langs.put("Bosnian", "bs");
        langs.put("Polish", "pl");
        langs.put("Welsh", "cy");
        langs.put("Portuguese", "pt");
        langs.put("Hungarian", "hu");
        langs.put("Romanian", "ro");
        langs.put("Vietnamese", "vi");
        langs.put("Russian", "ru");
        langs.put("Haitian", "ht");
        langs.put("Cebuano", "ceb");
        langs.put("Galician", "gl");
        langs.put("Serbian", "sr");
        langs.put("Dutch", "nl");
        langs.put("Sinhala", "si");
        langs.put("Hill Mari", "mrj");
        langs.put("Slovakian", "sk");
        langs.put("Greek", "el");
        langs.put("Slovenian", "sl");
        langs.put("Georgian", "ka");
        langs.put("Swahili", "sw");
        langs.put("Gujarati", "gu");
        langs.put("Sundanese", "su");
        langs.put("Danish", "da");
        langs.put("Tajik", "tg");
        langs.put("Hebrew", "he");
        langs.put("Thai", "th");
        langs.put("Yiddish", "yi");
        langs.put("Tagalog", "tl");
        langs.put("Indonesian", "id");
        langs.put("Tamil", "ta");
        langs.put("Irish", "ga");
        langs.put("Tatar", "tt");
        langs.put("Italian", "it");
        langs.put("Telugu", "te");
        langs.put("Icelandic", "is");
        langs.put("Turkish", "tr");
        langs.put("Udmurt", "udm");
        langs.put("Spanish", "es");
        langs.put("Kazakh", "kk");
        langs.put("Uzbek", "uz");
        langs.put("Kannada", "kn");
        langs.put("Ukrainian", "uk");
        langs.put("Catalan", "ca");
        langs.put("Urdu", "ur");
        langs.put("Kyrgyz", "ky");
        langs.put("Finnish", "fi");
        langs.put("Chinese", "zh");
        langs.put("French", "fr");
        langs.put("Korean", "ko");
        langs.put("Hindi", "hi");
        langs.put("Xhosa", "xh");
        langs.put("Croatian", "hr");
        langs.put("Khmer", "km");
        langs.put("Czech", "cs");
        langs.put("Laotian", "lo");
        langs.put("Swedish", "sv");
        langs.put("Latin", "la");
        langs.put("Scottish", "gd");
        langs.put("Latvian", "lv");
        langs.put("Estonian", "et");
        langs.put("Lithuanian", "lt");
        langs.put("Esperanto", "eo");
        langs.put("Luxembourgish", "lb");
        langs.put("Javanese", "jv");
        langs.put("Malagasy", "mg");
        langs.put("Japanese", "ja");
        langs.put("Malay", "ms");
    }

}
